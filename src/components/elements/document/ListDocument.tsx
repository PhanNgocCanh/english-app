import classNames from 'classnames/bind';
import styles from './ListDocument.module.scss';
import DocumentCard from './DocumentCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material';
import { useState } from 'react';
import { bgColor } from '@/constants/backgroundColor';

const cx = classNames.bind(styles);

function ListDocument() {
  const [isOpen, setIsOpen] = useState(false);
  const randomColor = (): string => {
    return bgColor[Math.floor(Math.random() * bgColor.length)];
  };
  return (
    <div className={`w-full h-screen ${cx('bg-document')} p-2 px-8`}>
      <div className="flex mb-2">
        <IconButton onClick={() => setIsOpen(true)}>
          <FontAwesomeIcon icon={faPlusCircle} size="lg" color="#64b3f4" />
        </IconButton>
      </div>
      <div className="grid grid-cols-5 gap-x-4 gap-y-8">
        <DocumentCard
          bgColor={randomColor()}
          title="Lizad"
          description="Tuy nhiên, giờ có trường hợp muốn hiển thị nhiều hơn 1 dòng rồi mới cắt text, thế thì phải làm sao nhỉ. Thật là may mắn khi CSS3 giới thiệu 1 thuộc tính giúp chúng ta làm việc đó chính là"
        />
        <DocumentCard bgColor={randomColor()} title="Lizad" description="def" />
        <DocumentCard bgColor={randomColor()} title="Lizad" description="abc" />
        <DocumentCard bgColor={randomColor()} title="Lizad" description="def" />
        <DocumentCard bgColor={randomColor()} title="Lizad" description="abc" />
        <DocumentCard bgColor={randomColor()} title="Lizad" description="def" />
      </div>
      <Dialog
        open={isOpen}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
          },
        }}>
        <DialogTitle>Create document</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant="contained" type="submit">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ListDocument;
