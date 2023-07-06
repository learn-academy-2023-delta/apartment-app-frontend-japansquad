import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home';

describe("<Home />", () => {
    it("has a header text", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        )
        const header = screen.getByRole('heading', {
            name: /welcome!/i
          })
        expect(header).toBeInTheDocument()
    })
})