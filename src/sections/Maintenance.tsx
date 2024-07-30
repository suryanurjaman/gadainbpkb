// MaintenancePage.tsx
import BhaskaraLogo from "../assets/logos/Bhaskara.png"; // Adjust the path to your logo

function MaintenancePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <img src={BhaskaraLogo} alt="Bhaskara Design Studio Logo" className="mb-8 md:mr-20 w-1/2 h-auto" />
            <h1 className="mb-4 text-2xl font-semibold md:text-4xl" style={{ color: 'rgb(241,86,36)' }}>
                Website Under Maintenance
            </h1>
            <p className="text-base md:text-lg" style={{ color: 'rgb(241,86,36)' }}>
                We are currently working on improving the website.
            </p>
            <p className="text-base md:text-lg" style={{ color: 'rgb(241,86,36)' }}>
                Please check back later.
            </p>
        </div>
    );
}

export default MaintenancePage;
