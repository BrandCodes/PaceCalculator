interface Props {
    hours: string;
    minutes: string;
    seconds: string;
    onHoursChange: (value: string) => void;
    onMinutesChange: (value: string) => void;
    onSecondsChange: (value: string) => void;
    error?: string;
}

export default function TimeInput({
    hours,
    minutes,
    seconds,
    onHoursChange,
    onMinutesChange,
    onSecondsChange,
    error,
}: Props) {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <label className="block mb-1 font-medium">Horas:</label>
                <input
                    type="number"
                    value={hours}
                    onChange={(e) => onHoursChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="0"
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Minutos:</label>
                <input
                    type="number"
                    value={minutes}
                    onChange={(e) => onMinutesChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="0"
                />
            </div>
            <div>
                <label className="block mb-1 font-medium">Segundos:</label>
                <input
                    type="number"
                    value={seconds}
                    onChange={(e) => onSecondsChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg"
                    min="0"
                    max="59"
                />
            </div>
            {error && (
                <div className="col-span-3">
                    <p className="text-red-600 text-sm mt-2">{error}</p>
                </div>
            )}
        </div>
    );
}
