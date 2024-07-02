import { Modal, ModalRootProps } from "@mantine/core";

export const DepositModal = (props: ModalRootProps) => {
  return (
    <Modal.Root {...props}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>
            <div>Deposit</div>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
      </Modal.Content>
    </Modal.Root>
  );
};
