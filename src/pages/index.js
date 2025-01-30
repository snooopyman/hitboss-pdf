export default function Home() {
    return (
        <div className="w-full h-screen flex justify-center bg-gray-100">
            <iframe
                src="/hitbosss.pdf"
                className="w-full h-full min-h-[100vh] border-none"
                style={{ overflow: "auto" }}
            />
        </div>
    );
}