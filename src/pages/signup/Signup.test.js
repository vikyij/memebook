import {render,screen} from '@testing-library/react'
import SignUp from './Signup'

describe('renders the different inputs', ()=> {
    test('renders username field', ()=> {
        render(<SignUp/>)
        const username = screen.getByPlaceholderText("Username")
        expect(username).toBeInTheDocument()
    })

    test('renders email field', ()=> {
        render(<SignUp/>)
        const email = screen.getByPlaceholderText("Email")
        expect(email).toBeInTheDocument()
    })

    test('renders password field', ()=> {
        render(<SignUp/>)
        const password = screen.getByPlaceholderText("Password")
        expect(password).toBeInTheDocument()
    })

    test('renders retype password field', ()=> {
        render(<SignUp/>)
        const retypePassword = screen.getByPlaceholderText("Retype Password")
        expect(retypePassword).toBeInTheDocument()
    })

    test('renders phone number field', ()=> {
        render(<SignUp/>)
        const phoneNumber = screen.getByPlaceholderText("Phone Number")
        expect(phoneNumber).toBeInTheDocument()
    })
}) 