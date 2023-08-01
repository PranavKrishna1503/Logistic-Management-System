


package contacts;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class Book {
    private static Map<String, Contact> contacts = new HashMap<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        loadContactsFromDatabase();
        while (true) {
            showMenu();
            int choice = scanner.nextInt();
            scanner.nextLine();

            switch (choice) {
                case 1:
                    addContact();
                    break;
                case 2:
                    viewContacts();
                    break;
                case 3:
                    searchContact();
                    break;
                case 4:
                    deleteContact();
                    break;
                case 5:
                    System.out.println("Exiting the Contact Book. Goodbye!");
                    System.exit(0);
                    break;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void showMenu() {
        System.out.println("\n--- Contact Book Menu ---");
        System.out.println("1. Add Contact");
        System.out.println("2. View Contacts");
        System.out.println("3. Search Contact");
        System.out.println("4. Delete Contact");
        System.out.println("5. Exit");
        System.out.print("Enter your choice: ");
        System.out.println();
    }

    private static void saveContactToDatabase(Contact contact) {
        try (Connection connection = Connector.getConnection();
             PreparedStatement statement = connection.prepareStatement("INSERT INTO contacts (name, phoneNumber, sec_no) VALUES (?, ?, ?)")) {
            statement.setString(1, contact.getName());
            statement.setString(2, contact.getPhoneNumber());
            statement.setString(3, contact.getSec_no());
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void loadContactsFromDatabase() {
        try (Connection connection = Connector.getConnection();
             PreparedStatement statement = connection.prepareStatement("SELECT * FROM contacts");
             ResultSet resultSet = statement.executeQuery()) {

            while (resultSet.next()) {
                String name = resultSet.getString("name");
                String phoneNumber = resultSet.getString("phoneNumber");
                String sec_no = resultSet.getString("sec_no");
                Contact contact = new Contact(name, phoneNumber, sec_no);
                contacts.put(name, contact);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private static void addContact() {
        System.out.print("Enter contact name: ");
        String name = scanner.nextLine();
        if (contacts.containsKey(name)) {
            System.out.println(name + " is already in the contact book.");
        } else {
            System.out.print("Enter phone number: ");
            String phoneNumber = scanner.nextLine();
            System.out.print("Enter Secondary number with comma-separated values: ");
            String sec_no = scanner.nextLine();
            Contact contact = new Contact(name, phoneNumber, sec_no);
            contacts.put(name, contact);
            saveContactToDatabase(contact);
            System.out.println(name + " added to contacts.");
        }
    }

    private static void viewContacts() {
        if (contacts.isEmpty()) {
            System.out.println("No contacts found.");
        } else {
            System.out.println("Contacts:");
            for (ContactBookItem contactItem : contacts.values()) {
                contactItem.displayContactInfo(); // Using polymorphism to display contact information
            }
        }
    }

    private static List<ContactBookItem> searchContact() {
        List<ContactBookItem> results = new ArrayList<>();
        System.out.print("Enter the name to search for: ");
        String name = scanner.nextLine();
        try (Connection conn = Connector.getConnection();
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM contacts WHERE name LIKE ?")) {
            stmt.setString(1, name + "%");
            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                String contactName = rs.getString("name");
                String phoneNumber = rs.getString("phoneNumber");
                String sec_no = rs.getString("sec_no");
                Contact contact = new Contact(contactName, phoneNumber, sec_no);
                results.add(contact); // Adding Contact object to the results list
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return results;
    }

    private static void deleteContact() {
        System.out.print("Enter the name of the contact to delete: ");
        String name = scanner.nextLine();
        if (contacts.containsKey(name)) {
            contacts.remove(name);
            deleteContactFromDatabase(name);
            System.out.println(name + " has been deleted from contacts.");
        } else {
            System.out.println("Contact not found.");
        }
    }

    private static void deleteContactFromDatabase(String name) {
        try (Connection connection = Connector.getConnection();
             PreparedStatement statement = connection.prepareStatement("DELETE FROM contacts WHERE name = ?")) {
            statement.setString(1, name);
            statement.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

interface ContactBookItem {
    void displayContactInfo();
}

class Contact implements ContactBookItem {
    private String name;
    private String phoneNumber;
    private String sec_no;

    public Contact(String name, String phoneNumber, String sec_no) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.sec_no = sec_no;
    }

    public String getName() {
        return name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getSec_no() {
        return sec_no;
    }

    @Override
    public void displayContactInfo() {
        System.out.println("Name: " + name + ", Phone: " + phoneNumber + ", Secondary Number: " + sec_no);
    }
}
