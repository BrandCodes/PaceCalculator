import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

interface Props {
    distance: string;
    unit: "km" | "mi";
    onDistanceChange: (value: string) => void;
    onUnitChange: (unit: "km" | "mi") => void;
    error?: string;
}

export default function DistanceInput({
    distance,
    unit,
    onDistanceChange,
    onUnitChange,
    error,
}: Props) {
    return (
        <div>
            {/* <label className="block mb-1 font-medium">Distancia:</label> */}
            {/* <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <label className="block mb-1 font-medium cursor-help">
                            Distancia:
                        </label><Info className="w-4 h-4" />
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <Tooltip.Content
                            side="top"
                            sideOffset={5}
                            className="bg-black text-white text-xs px-3 py-2 rounded-md animate-bounce-smooth z-50"
                        >
                            Ingresa la distancia que recorrerás (puedes elegir km o millas)
                            <Tooltip.Arrow className="fill-black" />
                        </Tooltip.Content>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider> */}
            <Tooltip.Provider>
                <div className="flex items-center gap-1">
                    <label className="block text-sm font-medium text-gray-700">
                        Distancia
                    </label>

                    <Tooltip.Root delayDuration={300}>
                        <Tooltip.Trigger asChild>
                            <button
                                type="button"
                                className="p-1 rounded-full text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Información sobre distancia"
                            >
                                <Info className="w-4 h-4" />
                            </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                            <Tooltip.Content
                                side="top"
                                sideOffset={5}
                                className="bg-black text-white text-xs px-3 py-2 rounded-md animate-bounce-smooth z-50 max-w-xs"
                            >
                                Ingresa la distancia que recorrerás. Puedes elegir entre kilómetros o millas.
                                <Tooltip.Arrow className="fill-black" />
                            </Tooltip.Content>
                        </Tooltip.Portal>
                    </Tooltip.Root>
                </div>
            </Tooltip.Provider>

            <input
                type="number"
                value={distance}
                onChange={(e) => onDistanceChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-blue-500 transition-colors duration-300"
                min="0"
            />
            {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
            <div className="mt-2 flex gap-4">
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="km"
                        checked={unit === "km"}
                        onChange={() => onUnitChange("km")}
                        className="mr-1"
                    />
                    Kilómetros
                </label>
                <label className="flex items-center">
                    <input
                        type="radio"
                        value="mi"
                        checked={unit === "mi"}
                        onChange={() => onUnitChange("mi")}
                        className="mr-1"
                    />
                    Millas
                </label>
            </div>
        </div>
    );
}
