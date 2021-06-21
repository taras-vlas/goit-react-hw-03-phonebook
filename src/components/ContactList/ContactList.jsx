import React from "react";
import PropTypes from 'prop-types';
import styles from "./ContactList.module.css";

const ListContact = ({ contacts, onDeleteContact }) => (
  <ul className={styles.List}>
    {contacts.map((contact) => (
      <li className = {styles.List_item} key={contact.id}>
        {"• " + contact.name + ":  " + contact.number}
        {
          <button
            className={styles.List_button}
            type="button"
            name="delete"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ListContact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}
export default ListContact;
