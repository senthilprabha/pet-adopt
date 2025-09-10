import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Admin.css';

function Admin() {
    const [activeTab, setActiveTab] = useState('addPet');
    const [users, setUsers] = useState([]);
    const [pets, setPets] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [editingPet, setEditingPet] = useState(null);
    const [editingUser, setEditingUser] = useState(null);

    // Pet form state variables
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [age, setAge] = useState('');
    const [dob, setDob] = useState('');
    const [location, setLocation] = useState('');
    const [img, setImg] = useState('');
    const [message, setMessage] = useState('');

    // User role editing
    const [role, setRole] = useState('');

    useEffect(() => {
        fetchUsers();
        fetchPets();
        fetchFeedbacks();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3001/users')
            .then(response => setUsers(response.data))
            .catch(err => console.log(err));
    };

    const fetchPets = () => {
        axios.get('http://localhost:3001/pets')
            .then(response => setPets(response.data))
            .catch(err => console.log(err));
    };

    const fetchFeedbacks = () => {
        axios.get('http://localhost:3001/feedback')
            .then(response => setFeedbacks(response.data))
            .catch(err => console.log(err));
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'addPet') {
            resetPetForm();
        }
        if (tab === 'viewUsers') {
            setEditingUser(null);
        }
    };

    const handleAddOrUpdatePet = (e) => {
        e.preventDefault();
        const petData = { name, breed, age, dob, location, img, message };

        if (editingPet) {
            axios.put(`http://localhost:3001/pets/${editingPet._id}`, petData)
                .then(() => {
                    toast.success('Pet updated successfully!');
                    fetchPets();
                    resetPetForm();
                })
                .catch(err => toast.error('Failed to update pet!'));
        } else {
            axios.post('http://localhost:3001/pets', petData)
                .then(() => {
                    toast.success('Pet added successfully!');
                    fetchPets();
                    resetPetForm();
                })
                .catch(err => toast.error('Failed to add pet!'));
        }
    };

    const resetPetForm = () => {
        setEditingPet(null);
        setName('');
        setBreed('');
        setAge('');
        setDob('');
        setLocation('');
        setImg('');
        setMessage('');
    };

    const handleEditPet = (pet) => {
        setEditingPet(pet);
        setName(pet.name);
        setBreed(pet.breed);
        setAge(pet.age);
        setDob(pet.dob ? pet.dob.substring(0, 10) : '');
        setLocation(pet.location);
        setImg(pet.img);
        setMessage(pet.message);
        setActiveTab('addPet');
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setRole(user.role);
    };

    const handleSaveUserRole = () => {
        if (editingUser) {
            axios.put(`http://localhost:3001/users/${editingUser._id}`, { role })
                .then(() => {
                    toast.success('User role updated successfully!');
                    fetchUsers();
                    setEditingUser(null);
                    setRole('');
                })
                .catch(err => toast.error('Failed to update user role!'));
        }
    };

    const handleDeletePet = (id) => {
        axios.delete(`http://localhost:3001/pets/${id}`)
            .then(() => {
                toast.success('Pet deleted successfully!');
                fetchPets();
            })
            .catch(err => toast.error('Failed to delete pet!'));
    };

    const handleDeleteUser = (id) => {
        axios.delete(`http://localhost:3001/users/${id}`)
            .then(() => {
                toast.success('User deleted successfully!');
                fetchUsers();
            })
            .catch(err => toast.error('Failed to delete user!'));
    };

    const handleDeleteFeedback = (id) => {
        axios.delete(`http://localhost:3001/feedback/${id}`)
            .then(() => {
                toast.success('Feedback deleted successfully!');
                fetchFeedbacks();
            })
            .catch(err => toast.error('Failed to delete feedback!'));
    };

    // Function to calculate age from date of birth
    const calculateAge = (dob) => {
        const today = new Date();
        const birthDate = new Date(dob);
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }
        return calculatedAge;
    };

    // Update age when DOB changes
    const handleDobChange = (e) => {
        const dobValue = e.target.value;
        setDob(dobValue);
        const calculatedAge = calculateAge(dobValue);
        setAge(calculatedAge);
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <h1>Pet Adoption Platform</h1>
                <p>Manage your pet adoption center with ease</p>
            </header>
            <div className="admin-dashboard">
                <nav className="admin-menu">
                    <ul>
                        <li onClick={() => handleTabClick('addPet')} className={activeTab === 'addPet' ? 'active' : ''}>
                            {editingPet ? 'Edit Pet' : 'Add Pet'}
                        </li>
                        <li onClick={() => handleTabClick('viewUsers')} className={activeTab === 'viewUsers' ? 'active' : ''}>User Details</li>
                        <li onClick={() => handleTabClick('viewPets')} className={activeTab === 'viewPets' ? 'active' : ''}>Pet Details</li>
                        <li onClick={() => handleTabClick('viewFeedback')} className={activeTab === 'viewFeedback' ? 'active' : ''}>View Feedback</li>
                    </ul>
                </nav>
                <div className="admin-content">
                    {activeTab === 'addPet' && (
                        <div className="tab-content">
                            <h2>{editingPet ? 'Edit Pet' : 'Add Pet'}</h2>
                            <form onSubmit={handleAddOrUpdatePet}>
                                <div className="form-group">
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Pet Name'
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='breed'>Breed</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Pet Breed'
                                        name="breed"
                                        value={breed}
                                        onChange={(e) => setBreed(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='age'>Age</label>
                                    <input
                                        type='number'
                                        placeholder='Pet Age will be calculated automatically'
                                        name="age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        disabled
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='dob'>Date of Birth</label>
                                    <input
                                        type='date'
                                        name="dob"
                                        value={dob}
                                        onChange={handleDobChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='location'>Location</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Pet Location'
                                        name="location"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='img'>Image URL</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Image URL'
                                        name="img"
                                        value={img}
                                        onChange={(e) => setImg(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor='message'>Message</label>
                                    <textarea
                                        placeholder='Enter a short message about the pet'
                                        name="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </div>
                                <button className='btn-edit' type="submit">{editingPet ? 'Update Pet' : 'Add Pet'}</button>
                            </form>
                        </div>
                    )}
                        {activeTab === 'viewUsers' && (
                        <div className="tab-content">
                            <h2>User Details</h2>
                            <table className="details-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Edit Role</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user._id}>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => handleEditUser(user)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className='btn-delete' onClick={() => handleDeleteUser(user._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {editingUser && (
                                <div>
                                    <h3>Edit User Role</h3>
                                    <label>
                                        Role:
                                        <input
                                            type='text'
                                            value={role}
                                            onChange={(e) => setRole(e.target.value)}
                                        />
                                    </label>
                                    <button onClick={handleSaveUserRole}>Save</button>
                                </div>
                            )}
                        </div>
                    )}
                    {activeTab === 'viewPets' && (
                        <div className="tab-content">
                            <h2>Pet Details</h2>
                            <table className="details-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Breed</th>
                                        <th>Age</th>
                                        <th>Date of Birth</th>
                                        <th>Location</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pets.map(pet => (
                                        <tr key={pet._id}>
                                            <td>{pet.name}</td>
                                            <td>{pet.breed}</td>
                                            <td>{pet.age}</td>
                                            <td>{pet.dob ? pet.dob.substring(0, 10) : ''}</td>
                                            <td>{pet.location}</td>
                                            <td>
                                                <button className='btn-edit' onClick={() => handleEditPet(pet)}>Edit</button>
                                            </td>
                                            <td>
                                                <button className='btn-delete' onClick={() => handleDeletePet(pet._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 'viewFeedback' && (
                        <div className="tab-content">
                            <h2>Feedback Details</h2>
                            <table className="details-table">
                                <thead>
                                    <tr>
                                        {/* <th>User</th> */}
                                        <th>Feedback</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {feedbacks.map(fb => (
                                        <tr key={fb._id}>
                                            {/* <td>{fb.user}</td> */}
                                            <td>{fb.feedback}</td>
                                            <td>
                                                <button className='btn-delete' onClick={() => handleDeleteFeedback(fb._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    
                    
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Admin;
