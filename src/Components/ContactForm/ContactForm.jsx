import React, { useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    groupeSanguin: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // remplacez cette ligne par l'envoi du formulaire
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="nom">Nom</label>
        <input type="text" id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="prenom">Prénom</label>
        <input type="text" id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="telephone">Téléphone</label>
        <input type="tel" id="telephone" name="telephone" value={formData.telephone} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="groupeSanguin">Groupe sanguin</label>
        <select id="groupeSanguin" name="groupeSanguin" value={formData.groupeSanguin} onChange={handleChange} required>
          <option value="">Choisissez votre groupe sanguin</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;







