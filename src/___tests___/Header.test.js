import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header'

const renderShow = () => {
    render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
        
    ) 
}
describe("<Header />", () => {
    it("renders a header", () => {
        renderShow()
        const headerjapanesetext = screen.getByRole('link', {
            name: /日本チーム/i
          })
        expect(headerjapanesetext).toBeInTheDocument()
    }),

    it("renders a link called list of apartments", () => {
        renderShow()
        const linkApartments = screen.getByRole('link', {
            name: /list of apartments/i
          })
        expect(linkApartments).toBeInTheDocument()
    }),

    it("renders a link called sign in", () => {
        renderShow()
        const linkSignIn = screen.getByRole('link', {
            name: /sign in/i
          })
        expect(linkSignIn).toBeInTheDocument()
    }),

    it("renders a link called sign up", () => {
        renderShow()
        const linkSignUp = screen.getByRole('link', {
            name: /sign up/i
          })
        expect(linkSignUp).toBeInTheDocument()
    })
})