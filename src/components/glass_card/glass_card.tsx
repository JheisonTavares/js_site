import { useNavigate } from 'react-router-dom';
import './glass_card_module.css';

export default function GlassCard() {
    const navigate = useNavigate();

    function onSeeDetails() {
        navigate(`/next`);
    }
    return (
        <div className="glass_card">
            <img src="./assets/images/macacos_cocos.jpg" alt="" />
            <button onClick={
                onSeeDetails} className='button_bacaco'>Bacaco que banana?</button>
        </div>
    );
}