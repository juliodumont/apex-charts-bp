import { AvatarIcon, BarChartIcon, DoneIcon, SyncIcon } from '../../assets/Icons';
import './SalesSummary.scss';
import SalesSummaryCard from './SalesSummaryCard/SalesSummaryCard';

const SalesSummary = () => {
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value="534.00" label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value="44434" label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value="434.00" label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value="3434.00" label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
