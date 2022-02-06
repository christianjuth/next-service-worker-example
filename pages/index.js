export default function Home() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1>Random dog image</h1>
      <img
        src='/api/img'
        style={{
          height: 200,
          width: 200,
          objectFit: 'cover'
        }}
        alt="Dog"
      />
    </div>
  )
}
