// TYPES
import { DataGridProps, GridColumns } from '@mui/x-data-grid'

declare module '@mui/x-data-grid' {
  interface GridColDef {
    hasSorting?: boolean;
  }
}

export type TTableColumn = GridColumns<any>;

export interface IDataGridTableFreeProps {
    dataGridProps: Omit<DataGridProps>;
    modeFilter?: boolean;
    showSorting?: boolean;
    initColumns: TTableColumn;
    initRows: Array<{[key: string]: any;}>;
    selectedColumns?: Array<{field: string;}>;
    dataFilters?: {[key: string]: string | number | boolean};
    setDataFilters?: React.Dispatch<React.SetStateAction<{[key: string]: string | number | boolean}>>;
    pageSize?: number;
    currentPage?: number;
    setPageSize?: React.Dispatch<React.SetStateAction<number>>;
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
    sortOn: string;
    sortModel?: 'asc' | 'desc' | null;
    setSortOn?: React.Dispatch<React.SetStateAction<string>>;
    setSortModel?: React.Dispatch<React.SetStateAction<'asc' | 'desc' | null>>;
    filterOnApi?: boolean;
}

export interface IFilterAndSortComponentProps extends Pick<IDataGridTableFreeProps, 'sortModel' | 'setSortModel' | 'sortOn' | 'setSortOn'> {
  children?: React.ReactNode | JSX.Element;
  modeFilter?: boolean;
  showSorting?: boolean;
  params?: any;
  testIdBtnSort?: string;
}