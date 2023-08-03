import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '', // Updated field name to "username"
    email: '',
    password: '',
    role: '', // Add role field
    //date: '', // Add date field
    address: '', // Add address field
    contactno: '', // Add phoneNumber field
    idproof: '', // Add idProof field
    agencyName: '',
  });

 

  const validateForm = () => {
    // Perform custom validation here, return true if valid, false otherwise
    if (!formData.email.includes("@")) {
      alert("Invalid email format");
      return false;
    }
    // Add other validations for username, password, etc.

    return true;
  };

  const [isAgentApproved, setIsAgentApproved] = useState(false); // New state variable

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:7112/api/Users/register', {
        ...formData,
        status: isAgentApproved ? 'Approved' : 'Pending', // Set the status based on agent approval
      });
      console.log('Registration success:', response.data);
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
    }
  };



  return (
    <div>
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        User Registration
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          // inputProps={{ pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" }}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        {/* <TextField
          label="Date"
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        /> */}
        <TextField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Phone Number"
          name="contactno"
          value={formData.contactno}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="ID Proof"
          name="idproof"
          value={formData.idproof}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
         <TextField
          label="AgencyName"
          name="agencyName"
          value={formData.agencyName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </Container>
    </div>
  );
};

export default RegistrationPage;