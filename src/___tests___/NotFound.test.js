import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import NotFound from '../pages/NotFound';

describe("<NotFound />", () => {
    it("has a not found text", () => {
        render(
            <BrowserRouter>
                <NotFound />
            </BrowserRouter>
        )
        const footer = screen.getByText(/notfound/i)
        expect(footer).toBeInTheDocument()
    })
})