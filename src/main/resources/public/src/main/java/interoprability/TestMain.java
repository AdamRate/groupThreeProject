package interoprability;

import java.sql.Connection;

public class TestMain {

    public static void main (String[] args){
        DBConnect db = new DBConnect();

        Connection myConn = db.createConnection("sql8.freemysqlhosting.net", "3306",
                "sql8195133", "sql8195133", "wWNmUR5lgl");

//        System.out.println(db.getUsername(myConn, 1));

        db.createCustomerUser(myConn, 2, "TEST", "TEST");



        db.closeConnection(myConn);

    }
}
