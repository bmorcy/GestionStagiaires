package ma.gov.bkam.ags.common;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import ma.gov.bkam.frwk.common.Startup;

/**
 * @author b.slayki
 * 
 */
public class StartUp extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -8064632541182997075L;

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy();
	}

	/**
	 * Initialization of the servlet. <br>
	 * 
	 * @throws ServletException
	 *             if an error occure
	 */
	public void init() throws ServletException {
		try {
			System.out.println("**********Chargement mapping***********");
			Startup.getInstance().init();
			System.out.println("**********Initialisation Paramétrage********");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
