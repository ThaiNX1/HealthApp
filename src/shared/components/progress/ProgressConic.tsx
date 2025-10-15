import React from "react";
import "./progress-conic.css";

export interface ProgressConicProps {
    value: number;            // 0..100
    size?: number;            // px (mặc định 181)
    thickness?: number;       // độ dày cung, px (mặc định 10)
    ringTrack?: number;        // khoảng cách từ viền vào, px (mặc định 12)
    dateLabel?: string;        // style ngoài
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

export const ProgressConic: React.FC<ProgressConicProps> = ({
    value,
    size = 181,
    thickness = 4,
    ringTrack = 0,
    dateLabel,
}) => {
    const vNorm = Math.max(0, Math.min(100, value)) / 100; // normalize 0..1
    return (
        <div className="relative rounded-xl overflow-hidden" style={{ width: size, height: size }}>
            {/* Overlay container for the two rings + label */}
            <div className="absolute inset-0">
                {/* Base thin ring */}
                <div className="absolute inset-[12px] rounded-full" style={{ boxShadow: `inset 0 0 0 ${ringTrack}px #fff` }} aria-hidden />

                {/* Progress arc using conic-gradient */}
                <div
                    className="absolute inset-[12px] rounded-full conic-arc"
                    style={{
                        // expose custom properties for CSS to use (and animate if supported)
                        // we pass decimal 0..1 for --value, and px for thickness
                        // @ts-ignore - CSS custom props
                        "--value": vNorm as unknown as string,
                        // @ts-ignore
                        "--thickness": `${thickness}px` as unknown as string,
                    }}
                    role="img"
                    aria-label={`Progress ${Math.round(vNorm * 100)}%`}
                />

                {/* Centered label like screenshot */}
                <div className="absolute inset-0 grid place-items-center">
                    <div className="text-white flex gap-[4px] items-center justify-center">
                        <span className="text-[18px] font-normal">{dateLabel}</span>
                        <span className="text-[25px] font-normal">{Math.round(vNorm * 100)}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressConic;