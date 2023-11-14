/**
 * 
 */
package ma.gov.bkam.ags.dal.dao;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.StringTokenizer;

import ma.gov.bkam.ags.dal.util.Searcheable;
import ma.gov.bkam.ags.dal.util.Utils;
import ma.gov.bkam.frwk.common.StartupException;
import ma.gov.bkam.frwk.dal.IBusinessObjectManager;
import ma.gov.bkam.frwk.dal.IQuery;
import ma.gov.bkam.frwk.dal.dao.BaseDAO;
import ma.gov.bkam.frwk.dal.exception.DataAccessException;

import org.apache.commons.beanutils.BeanUtilsBean;
import org.apache.commons.lang.StringUtils;

/**
 * @author y.nadir
 * 
 */
public class SearchMultiDAO extends BaseDAO {

	/**
	 * @param bom
	 * @throws StartupException
	 * @throws DataAccessException
	 */
	public SearchMultiDAO(IBusinessObjectManager bom) throws StartupException,
			DataAccessException {
		super(bom);
	}

	public IBusinessObjectManager getBusinessObjectManager() {
		return bom;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Collection getlistObject(Object object, Collection orderByElements,
			String... options) throws Exception {

		// opptions[0] maxSize of elements to be returned
		Utils utils = Utils.getInstanceUtils();

		String sql = "from " + object.getClass().getName() + " where 1=1";
		Map values = new HashMap();
		int position = 1;
		Field[] fields = object.getClass().getDeclaredFields();
		for (int i = 0; i < fields.length; i++) {
			Field field = fields[i];
			String property = field.getName();
			if ("serialVersionUID".equals(property))
				continue;

			Object refObjet = BeanUtilsBean.getInstance().getPropertyUtils()
					.getProperty(object, property);
			if (refObjet == null)
				continue;

			if (Utils.isCollection(field.getType()))
				continue;

			if (Utils.isReference(field.getType())) {
				Searcheable entityBase = (Searcheable) refObjet;
				if (entityBase.getPrimaryKey() == null) {
					throw new Exception(
							"IL faut renseigner les propriétés uniques de l'objet "
									+ entityBase.getClass().getSimpleName());
				}

				String refObjectPK = (String) entityBase.getPrimaryKey();
				Object identifiant = BeanUtilsBean.getInstance()
						.getPropertyUtils().getProperty(refObjet, refObjectPK);
				if (identifiant == null
						|| StringUtils.isEmpty(identifiant.toString()))
					continue;

				sql += " and " + property + "." + refObjectPK + "= ?";
				values.put(position, identifiant);
				position++;
			} else if (field.getType().equals(Boolean.class)
					|| field.getType().equals(Date.class)) {
				sql += " and " + property + " = ?";
				values.put(position, refObjet);
				position++;
			} else if (refObjet.toString().length() > 0)
				sql += " and "
						+ property
						+ " like '"
						+ refObjet.toString().replace('*', '%')
								.replace("'", "''") + "'";

		}

		// Order by elements
		if (orderByElements != null && !orderByElements.isEmpty()) {
			String orderBy = " order by ";
			Iterator iter = orderByElements.iterator();
			while (iter.hasNext()) {
				Object objectOrdrBy = iter.next();
				if (objectOrdrBy != null && objectOrdrBy instanceof String) {
					String objectOrdrBySt = (String) objectOrdrBy;
					if (objectOrdrBySt.length() > 0) {
						/*
						 * verifier que objectOrdrBySt n'est de la forme
						 * refObjet.property, c'est le cas recuperer le refObjet
						 */
						StringTokenizer tokenizer = new StringTokenizer(
								objectOrdrBySt, ".");
						String refObjet = tokenizer.nextToken();
						boolean isProperty = utils.isProperty(refObjet,
								object.getClass());
						if (isProperty)
							orderBy += objectOrdrBySt + ",";
					}
				}
			}
			// Supprimer la dérniere ','
			if (!" order by ".equals(orderBy)) {
				orderBy = orderBy.substring(0, orderBy.length() - 1);
				sql += orderBy;
			}
		}

		IQuery query = bom.createObjectQuery(sql, object.getClass());
		for (int i = 1; i < position; i++) {
			query.setParameter(i, values.get(i));
		}
		if (options != null && options.length == 1) {
			query.setMaxResults(Integer.parseInt(options[0]));
		}
		Collection listObjet = query.getResultList();
		return listObjet;
	}

}
