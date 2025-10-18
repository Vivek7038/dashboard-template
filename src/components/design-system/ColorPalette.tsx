interface ColorPaletteProps {
  colors: string[];
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className='flex h-16 w-full overflow-hidden rounded-2xl'>
      {colors.map((color, index) => (
        <div
          key={index}
          className='flex-1'
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}
