export default function createNode(type: string) {
    return {
        id: crypto.randomUUID(),
        type: type,
        data: { label: 'Add text' },
        position: { x: Math.random() * 400, y: Math.random() * 400 }
    }
}