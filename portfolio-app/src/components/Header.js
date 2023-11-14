import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <div>
            <Button
                color="secondary"
                disabled={false}
                size="large"
                variant="text"
            />
            <Link to="/">Visit Home</Link>
        </div>
    )
}