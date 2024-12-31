import { render, screen } from "@testing-library/react"
import sum from "../sum"
import '@testing-library/jest-dom'
import Demo from "../components/Demo"
describe('should render Demo', () => {
   it('Render Demo',()=>{
      render(<Demo/>)
      const val = screen.getByText('Hi this is Nithin')
      expect(val).toBeInTheDocument();
   })
   
   it('sum should return the addition of two numbers',()=>{
      const res =  sum(2,3)
      expect(res).toBe(5)
   })
})
