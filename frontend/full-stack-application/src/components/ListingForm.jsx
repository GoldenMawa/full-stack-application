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
        setFormData({ ...formData, [evt.target.name]: evt.target.value})
    }

  return (
    <div>
        <form >
            <input type='text' name='text'/>
            <input type='text' name='description'/>
            <input type='date' name='founded'/>
            <input type='image' name='logo/photoimage'/>
            <input type='submit' value='Create New Listing'/>
        </form>

        <p>Fill out the fields with your business or service information</p>
        <p>Logo or Photo is optional, use 'Image' to add</p>

    </div>
  )
}

export default ListingForm