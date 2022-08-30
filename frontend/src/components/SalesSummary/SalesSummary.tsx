import { useMemo, useEffect, useState } from 'react';
import { AvatarIcon, BarChartIcon, DoneIcon, SyncIcon } from '../../assets/Icons';
import { FilterData, SalesSummaryData } from '../../types';
import { buildFilterParams, makeRequest } from '../../utils/request';
import './SalesSummary.scss';
import SalesSummaryCard from './SalesSummaryCard/SalesSummaryCard';

type Props = {
  filterData?: FilterData;
};

const SalesSummary = ({ filterData }: Props) => {
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);
  const [summary, setSummary] = useState<SalesSummaryData>({
    avg: 0,
    max: 0,
    min: 0,
    count: 0
  });

  useEffect(() => {
    makeRequest.get<SalesSummaryData>('/sales/summary', { params }).then((response) => {
      setSummary(response.data);
    });
  }, [params]);
  return (
    <div className="sales-summary-container">
      <SalesSummaryCard value={summary?.avg.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SalesSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SalesSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon />} />
      <SalesSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  );
};

export default SalesSummary;
