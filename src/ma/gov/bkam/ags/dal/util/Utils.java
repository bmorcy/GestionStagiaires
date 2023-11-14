package ma.gov.bkam.ags.dal.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.SortedSet;

import org.apache.commons.beanutils.BeanUtilsBean;
import org.apache.commons.beanutils.PropertyUtils;

/**
 * @author b.slayki
 * 
 */
public class Utils extends BeanUtilsBean {

	private static Utils instance;
	SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

	private Utils() {
		super();
		super.getInstance();
	}

	public static Utils getInstanceUtils() {
		if (instance == null)
			instance = new Utils();
		return instance;
	}

	public static boolean isReference(Class clazz) {
		if (clazz.isPrimitive())
			return false;
		Package pakage = clazz.getPackage();
		if (pakage == null || pakage.getName().startsWith("java"))
			return false;
		return true;
	}

	public Date toDate(String stringDate) throws ParseException {
		Date date = null;
		DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		date = (Date) formatter.parse(stringDate);
		return date;
	}

	public static boolean isCollection(Class type) {
		// le type est l'interface Collection
		if (type.toString().equalsIgnoreCase(Collection.class.toString()))
			return true;
		// le type est l'interface List ou l'interface Set
		else if (type.isInterface()) {
			if (type.toString().equalsIgnoreCase(List.class.toString()))
				return true;
			if (type.toString().equalsIgnoreCase(Set.class.toString()))
				return true;
		}
		// le type est une classe qui implémente Collection, List, Set ou
		// SortedSet
		else {
			Class[] interfaces = type.getInterfaces();
			int intLength = interfaces.length;
			for (int i = 0; i < intLength; i++) {
				if (interfaces[i].toString().equalsIgnoreCase(
						Collection.class.toString()))
					return true;
				if (interfaces[i].toString().equalsIgnoreCase(
						List.class.toString()))
					return true;
				if (interfaces[i].toString().equalsIgnoreCase(
						Set.class.toString()))
					return true;
				if (interfaces[i].toString().equalsIgnoreCase(
						SortedSet.class.toString()))
					return true;
			}
		}
		return false;
	}

	public static List convertCollectionToList(Collection collection)
			throws Exception {

		List list = new ArrayList();
		Iterator iterator = collection.iterator();
		while (iterator.hasNext()) {
			list.add(iterator.next());
		}
		return list;
	}

	public boolean isProperty(String nameProperty, Class clazz) {

		boolean ok = false;

		try {
			java.lang.reflect.Field[] fields = clazz.getDeclaredFields();
			for (int i = 0; i < fields.length; i++) {
				String nameField = fields[i].getName();
				if (nameField.equals(nameProperty)) {
					ok = true;
					break;
				}

			}
		} catch (Exception e) {
			ok = false;
		}

		return ok;
	}

	public String nameObject(Object object) {

		String nameObjet = object.getClass().getName();
		String namePackage = object.getClass().getPackage().getName();
		int lenghtNamePackaage = namePackage.length();
		nameObjet = nameObjet.substring(lenghtNamePackaage + 1,
				nameObjet.length());
		return nameObjet;
	}

	private static byte[] getBytesFromFile(String pathFile) {

		if (pathFile != null && !pathFile.equals("")) {
			File file = new File(pathFile);
			byte[] bytes = null;
			InputStream is = null;

			try {
				is = new FileInputStream(file);

				// Get the size of the file
				long length = file.length();

				/**
				 * You cannot create an array using a long type. It needs to be
				 * an int type. Before converting to an int type, check to
				 * ensure that file is not larger than Integer.MAX_VALUE.
				 */
				if (length > Integer.MAX_VALUE) {
					// File is too large
				}

				// Create the byte array to hold the data
				bytes = new byte[(int) length];

				// Read in the bytes
				int offset = 0;
				int numRead = 0;
				while (offset < bytes.length
						&& (numRead = is.read(bytes, offset, bytes.length
								- offset)) >= 0) {
					offset += numRead;
				}

				// Ensure all the bytes have been read in
				if (offset < bytes.length) {
					throw new IOException("Could not completely read file "
							+ file.getName());
				}

				// Close the input stream and return bytes
			} catch (FileNotFoundException e) {

			}

			finally {
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
				return bytes;
			}
		} else
			return null;
	}

}
