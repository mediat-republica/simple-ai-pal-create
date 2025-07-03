
import { useState } from 'react';
import { ProceduresTabs } from './ProceduresTabs';
import { ProcedureForm } from './ProcedureForm';
import { ProcedureSummaryModal } from './ProcedureSummaryModal';
import { ApprovalModal } from './ApprovalModal';
import { ApprovalQueueModal } from './ApprovalQueueModal';

interface ProceduresSectionsProps {
  section: string;
  language: string;
}

export function ProceduresSections({ section, language }: ProceduresSectionsProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showApprovalQueue, setShowApprovalQueue] = useState(false);
  const [procedureData, setProcedureData] = useState(null);

  const handleAddProcedure = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleProcedureSubmitted = (data: any) => {
    setProcedureData(data);
    setShowAddForm(false);
    setShowApprovalModal(true);
  };

  const handleCloseSummaryModal = () => {
    setShowSummaryModal(false);
    setProcedureData(null);
  };

  const handleAddAnotherProcedure = () => {
    setShowSummaryModal(false);
    setProcedureData(null);
    setShowAddForm(true);
  };

  const handleApprove = (comment?: string) => {
    console.log('Procédure approuvée:', procedureData, 'Commentaire:', comment);
    setShowApprovalModal(false);
    setShowSummaryModal(true);
  };

  const handleReject = (reason: string) => {
    console.log('Procédure rejetée:', procedureData, 'Raison:', reason);
    setShowApprovalModal(false);
    setProcedureData(null);
  };

  const handleOpenApprovalQueue = () => {
    setShowApprovalQueue(true);
  };

  const handleApproveFromQueue = (item: any, comment?: string) => {
    console.log('Approuvé depuis la file:', item, comment);
  };

  const handleRejectFromQueue = (item: any, reason: string) => {
    console.log('Rejeté depuis la file:', item, reason);
  };

  const handleViewFromQueue = (item: any) => {
    setProcedureData(item.data);
    setShowApprovalQueue(false);
    setShowApprovalModal(true);
  };

  if (showAddForm) {
    return (
      <ProcedureForm 
        onClose={handleCloseForm} 
        onSubmit={handleProcedureSubmitted}
      />
    );
  }

  return (
    <div className="space-y-6">
      <ProceduresTabs 
        section={section} 
        onAddProcedure={handleAddProcedure}
        onOpenApprovalQueue={handleOpenApprovalQueue}
      />
      
      <ProcedureSummaryModal
        isOpen={showSummaryModal}
        onClose={handleCloseSummaryModal}
        onAddAnother={handleAddAnotherProcedure}
        procedureData={procedureData}
      />

      <ApprovalModal
        isOpen={showApprovalModal}
        onClose={() => setShowApprovalModal(false)}
        onApprove={handleApprove}
        onReject={handleReject}
        data={procedureData}
        type="procedure"
      />

      <ApprovalQueueModal
        isOpen={showApprovalQueue}
        onClose={() => setShowApprovalQueue(false)}
        onApproveItem={handleApproveFromQueue}
        onRejectItem={handleRejectFromQueue}
        onViewItem={handleViewFromQueue}
      />
    </div>
  );
}
