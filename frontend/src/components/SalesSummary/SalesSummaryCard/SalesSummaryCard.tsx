import './SalesSummaryCard.scss';

type SalesSummaryCardProps = {
  icon: React.ReactNode;
  label: string;
  value: number | string;
};

const SalesSummaryCard = ({ label, value, icon }: SalesSummaryCardProps) => {
  return (
    <div className="sales-summary-card base-card">
      <div className="sales-summary-card-icon">{icon}</div>
      <h3 className="sales-summary-card-value">{value}</h3>
      <p className="sales-summary-card-label">{label}</p>
    </div>
  );
};

export default SalesSummaryCard;
