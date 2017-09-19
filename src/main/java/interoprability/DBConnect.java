

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Time;
import java.util.Random;

import javax.inject.Named;

public class DBConnect {





    public Connection createConnection(String ipAddress,String port, String dbName,String username, String password) {
        Connection myConnection = null;
        System.out.println("-------- MySQL JDBC Connection Testing ------------");
        System.out.println(("jdbc:mysql://"+ ipAddress + ":" + port + "/" + dbName + "," + username +"," + password));
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.out.println("Where is your MySQL JDBC Driver?");
            e.printStackTrace();
            return myConnection;
        }

        System.out.println("MySQL JDBC Driver Registered!");
        Connection connection = null;

        try {
            connection = DriverManager
                    .getConnection("jdbc:mysql://"+ ipAddress + ":" + port + "/" + dbName,username,password);


        } catch (SQLException e) {
            System.out.println("Connection Failed! Check output console");
            e.printStackTrace();
            return myConnection;
        }

        if (connection != null) {
            System.out.println("You made it, take control your database now!");
            myConnection = connection;
        } else {
            System.out.println("Failed to make connection!");
        }
        return myConnection;
    }

    @Named
    public String generateId(){
        return "10-983-" + Math.abs(new Random().nextInt());

    }


    public void closeConnection(Connection myConnection) {
        try {
            myConnection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public void putTickets(Connection myConnection, String filmTitle,String type, Time time, Date date, String seatNumber, String price) {
        String query = " insert into tickets (title,type, time, date, seatNumber, filmType, price)"
                + " values (?, ?, ?, ?, ?, ?, ?)";
        PreparedStatement preparedStmt;
        try {
            preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString   (1, filmTitle);
            preparedStmt.setString (2, type);
            preparedStmt.setTime   (3, time);
            preparedStmt.setDate  (4, date);
            preparedStmt.setString   (5, seatNumber);
            preparedStmt.setString   (6, price);

            preparedStmt.execute();
        } catch (SQLException e) {

            e.printStackTrace();
        }
    }



    public  int getId(Connection myConnection,String filmTitle) {
        String result = "";
        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select ticketid from tickets where filmTitle = " + "\"" + filmTitle +"\"");

            while (rs.next()) {
                result = result + rs.getString("ticketid");
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        int resultx = Integer.parseInt(result);
        return resultx;
    }


    public  int getPrice(Connection myConnection,int price) {
        String result = "";
        try {
            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select ticketid from tickets where price = " + price);

            while (rs.next()) {
                result = result + rs.getString("price");
            }

        } catch (SQLException e) {

            e.printStackTrace();
        }

        int resultx = Integer.parseInt(result);
        return resultx;
    }



    public  String getName(Connection myConnection,int ticketid) {
        String result = "";
        try {

            Statement stmt = myConnection.createStatement();
            ResultSet rs = stmt.executeQuery("select filmTitle from tickets where ticketid = " + ticketid);
            while (rs.next()) {
                result = result + rs.getString("filmTitle");

            }

        } catch (SQLException e) {

            e.printStackTrace();
        }
        System.out.println(result);
        return result;
    }



    public  void removeProductById(Connection myConnection,int ticketid) {
        String query = "delete from tickets where ticketid = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setInt(1, ticketid);
            preparedStmt.execute();


        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


    public  void removeProductByName(Connection myConnection,String filmTitle) {
        String query = "delete from tickets where filmtitle = ?";

        try {

            PreparedStatement preparedStmt = myConnection.prepareStatement(query);
            preparedStmt.setString(1, filmTitle);
            preparedStmt.execute();



        } catch (SQLException e) {

            e.printStackTrace();
        }


    }


}