import {useState} from 'react'

function ListingForm() {
    const [formData,setFormData ] = useState({
        text: '',
        description: '',
        founded: '',
        image: '',
    })

    const LOCAL_URL = 'http://localhost:5173';
    const handleChange= (evt) => {
        setFormData({ ...formData, [evt.target.name]: evt.target.value});
    }

// This will prevent app from refreshing everytime I click submit so it doesnt crash
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(forData);
        addListing(formData);
        setFormData({
            text: '',
            description: '',
            founded: '',
            image: '',
        })
    }

    //before this can be fully implemented
    // we need to:
    // import axios
    //implement this on my server/backend
    //know how to handle the response
    //endpoint: POST route to '/api/listing' with the new Listing in the req.body
    const addListing = async (formData) => {
        console.log(' in addListing and this is my form: ${formData}')
        console.log('eventually this will send a post request to my backend')
    }

  return (
    <div>
        <form >
            <input 
            type='text' 
            name='text'
            required
            onChange ={handleChange}
            value={formData.text}
            />
            <input 
            type='text' 
            name='description'
            onChange={handleChange}
            value={formData.text}
            />
            <input
             type='date' 
             name='founded'
             onChange={handleChange}
             value={formData.founded}
             />
            <input 
            type='image'
            name='LogoOrPhoto'
            onChange={handleChange}
            value={formData.LogoOrPhoto} />
            <input 
            type='submit' 
            value='Create New Listing'/>
        </form>

        <p>Fill out the fields with your business or service information</p>
        <p>Adding a logo or photo is optional, use 'Image' to add</p>

    </div>
  )
}

export default ListingForm