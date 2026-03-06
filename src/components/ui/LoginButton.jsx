/**
 * Login button component.
 *
 * A reusable button used for login state interaction.
 * The button triggers the provided click handler
 * and displays custom button text via children.
 *
 * @param {Object} props - Component properties.
 * @param {"button" | "submit" | "reset"} props.type - HTML button type.
 * @param {React.ReactNode} props.children - Button label content.
 * @param {Function} props.onClick - Click event handler.
 * @returns {JSX.Element} Rendered login button.
 */
export default function LoginButton({ type, children, onClick }) {
  return (
    <button onClick={onClick} type={type} className="login_button">
      {children}
    </button>
  );
}