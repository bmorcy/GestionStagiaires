package ma.gov.bkam.ags.dal.dao;

import ma.gov.bkam.frwk.common.StartupException;
import ma.gov.bkam.frwk.dal.IBusinessObjectManager;
import ma.gov.bkam.frwk.dal.dao.BaseDAO;
import ma.gov.bkam.frwk.dal.exception.DataAccessException;

public class CreateCrud extends BaseDAO {

	public CreateCrud(IBusinessObjectManager bom) throws StartupException,
			DataAccessException {
		super(bom);
	}
}
