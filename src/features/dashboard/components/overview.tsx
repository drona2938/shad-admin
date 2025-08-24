'use client'

export function Overview() {
  return (
    <div className='h-[350px] w-full flex items-center justify-center border border-dashed border-border rounded-lg'>
      <div className='text-center'>
        <h3 className='text-lg font-medium text-muted-foreground'>Chart Placeholder</h3>
        <p className='text-sm text-muted-foreground mt-2'>
          Overview chart will be displayed here
        </p>
        <div className='mt-4 text-xs text-muted-foreground'>
          (Recharts component temporarily disabled for compatibility)
        </div>
      </div>
    </div>
  )
}
