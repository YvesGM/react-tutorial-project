/**
 * Card wrapper component.
 * 
 * Provides a reusable container element used to group
 * different UI elements inside the application.
 * 
 * Accept React children and renders them inside 
 * a styled card container.
 *  
 * @param {Object} props - Component properties. 
 * @param {React.ReactNode} props.children - Elements rendered inside the card. 
 * @returns {JSX.Element} Rendered card wrapper.
 */
export default function Card({ children }) {
  return <div className="card">{children}</div>;
}