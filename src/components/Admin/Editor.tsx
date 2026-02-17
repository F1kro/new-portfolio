// src/components/Admin/Editor.tsx

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export default function Editor({ content, onChange }: { content: string, onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    immediatelyRender: false, // <--- TAMBAHKAN BARIS INI
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'prose prose-invert max-w-none border border-white/10 p-4 rounded-xl min-h-[300px] focus:outline-none bg-white/5',
      },
    },
  });

  return <EditorContent editor={editor} />;
}