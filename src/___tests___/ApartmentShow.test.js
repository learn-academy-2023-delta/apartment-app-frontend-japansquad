import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import mockApartments from '../MockApartments';
import ApartmentShow from '../pages/ApartmentShow';

const renderShow = () => {
    render(
        <MemoryRouter initialEntries={["/apartments/1"]}>
            <Routes>
                <Route path="/apartments/:id" element={<ApartmentShow apartments={mockApartments} />} />
            </Routes>
        </MemoryRouter>
    )
 
}

describe("<ApartmentShow />", () => {
    it("renders image of card", () => {
        renderShow()
        const img = screen.getByRole('img')
        expect(img).toBeInTheDocument()
    }),
    it("renders price per month", () => {
        renderShow()
        const pricePerMonth = screen.getByRole('heading', {
            name: /\$173\/month/i
          })
        expect(pricePerMonth).toBeInTheDocument()
    }),
    it("renders street, city, prefecture", () => {
        renderShow()
        const streetCityPrec = screen.getByRole('heading', {
            name: /memory lane,daisen,akita/i
          })
        expect(streetCityPrec).toBeInTheDocument()
    }),
    it("renders bedroom and bathroom", () => {
        renderShow()
        const bedBath = screen.getByRole('heading', {
            name: /1 bedroom,0\.5 bath/i
          })
        expect(bedBath).toBeInTheDocument()
    }),
    it("renders pets", () => {
        renderShow()
        const pets = screen.getByRole('heading', {
            name: /pets: dogs and cats allowed/i
          })
        expect(pets).toBeInTheDocument()
    }),
    it("renders amenities", () => {
        renderShow()
        const amenities = screen.getByText(/amenities: air conditioner, bath and toilet, bidet/i)
        expect(amenities).toBeInTheDocument()
    }),
    it("renders a button", () => {
        renderShow()
        const aButton = screen.getByRole('button', {
            name: /back to list/i
          })
        expect(aButton).toBeInTheDocument()
    })
})
