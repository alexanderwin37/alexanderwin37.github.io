import React from 'react';
import './GlassSurface.css';

export interface GlassSurfaceProps {
    children?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    opacity?: number;
    blur?: number;
    saturation?: number;
    className?: string;
    style?: React.CSSProperties;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
    children,
    width = 12.5,
    height = 5,
    borderRadius = 1.25,
    opacity = 0.93,
    blur = 20,
    saturation = 1.4,
    className = '',
    style = {},
    onMouseEnter,
    onMouseLeave,
}) => {
    const containerStyle: React.CSSProperties = {
        ...style,
        width: typeof width === 'number' ? `${width}rem` : width,
        height: typeof height === 'number' ? `${height}rem` : height,
        borderRadius: `${borderRadius}rem`,
        '--glass-blur': `${blur}px`,
        '--glass-saturation': saturation,
        '--glass-opacity': opacity,
    } as React.CSSProperties;

    return (
        <div className={`glass-surface ${className}`} style={containerStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className="glass-surface__content">{children}</div>
        </div>
    );
};

export default GlassSurface;
