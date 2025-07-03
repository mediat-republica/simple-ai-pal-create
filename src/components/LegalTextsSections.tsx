
import { useState } from 'react';
import { LegalTextsTabs } from './LegalTextsTabs';
import { LegalTextFormEnhanced } from './LegalTextFormEnhanced';
import { LegalTextSummaryModal } from './LegalTextSummaryModal';
import { ApprovalModal } from './ApprovalModal';
import { ApprovalQueueModal } from './ApprovalQueueModal';

interface LegalTextsSectionsProps {
  section: string;
  language: string;
}

export function LegalTextsSections({ section, language }: LegalTextsSectionsProps) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showApprovalQueue, setShowApprovalQueue] = useState(false);
  const [legalTextData, setLegalTextData] = useState(null);

  const handleAddLegalText = () => {
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
  };

  const handleLegalTextSubmitted = (data: any) => {
    setLegalTextData(data);
    setShowAddForm(false);
    setShowApprovalModal(true);
  };

  const handleCloseSummaryModal = () => {
    setShowSummaryModal(false);
    setLegalTextData(null);
  };

  const handleAddAnotherLegalText = () => {
    setShowSummaryModal(false);
    setLegalTextData(null);
    setShowAddForm(true);
  };

  const handleApprove = (comment?: string) => {
    console.log('Texte juridique approuvé:', legalTextData, 'Commentaire:', comment);
    setShowApprovalModal(false);
    setShowSummaryModal(true);
  };

  const handleReject = (reason: string) => {
    console.log('Texte juridique rejeté:', legalTextData, 'Raison:', reason);
    setShowApprovalModal(false);
    setLegalTextData(null);
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
    setLegalTextData(item.data);
    setShowApprovalQueue(false);
    setShowApprovalModal(true);
  };

  if (showAddForm) {
    return (
      <LegalTextFormEnhanced 
        onClose={handleCloseForm} 
        onSubmit={handleLegalTextSubmitted}
      />
    );
  }

  return (
    <div className="space-y-6">
      <LegalTextsTabs 
        section={section} 
        onAddLegalText={handleAddLegalText}
        onOpenApprovalQueue={handleOpenApprovalQueue}
      />
      
      <LegalTextSummaryModal
        isOpen={showSummaryModal}
        onClose={handleCloseSummaryModal}
        onAddAnother={handleAddAnotherLegalText}
        legalTextData={legalTextData}
      />

      <ApprovalModal
        isOpen={showApprovalModal}
        onClose={() => setShowApprovalModal(false)}
        onApprove={handleApprove}
        onReject={handleReject}
        data={legalTextData}
        type="legal-text"
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
