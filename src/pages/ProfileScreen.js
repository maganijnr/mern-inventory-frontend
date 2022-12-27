import DashboardLayout from "../components/layout/DashboardLayout";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
	const auth = useSelector((state) => state.auth);
	const { user } = auth;

	return (
		<DashboardLayout>
			<h2>Profile</h2>
		</DashboardLayout>
	);
};

export default ProfileScreen;
