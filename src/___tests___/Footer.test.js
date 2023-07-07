import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer'

const renderShow = () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
        
    ) 
}

describe("<Footer />", () => {
    it("renders a footer text", () => {
        renderShow()
        const footerNames = screen.getByText(/copy right: brandon shinzato, paul gooden, michael ortega/i)
        expect(footerNames).toBeInTheDocument()
    })
})