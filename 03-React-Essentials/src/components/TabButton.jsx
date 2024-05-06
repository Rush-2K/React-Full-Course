export default function TabButton({ children , onClick, isSelected }) {

    console.log('TAB BUTTON COMPONENT EXECUTING');

    return (
      <li>
        <button className={isSelected ? 'actoive' : undefined}onClick={onClick}>{children}</button>
      </li>
    );
}