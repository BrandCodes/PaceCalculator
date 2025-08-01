interface Props {
    onClick: () => void;
}

export default function CalculateButton({ onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-300 transition"
        >
            Calcular
        </button>
    );
}
