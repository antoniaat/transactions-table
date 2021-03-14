import {
  UseColumnOrderInstanceProps,
  UseExpandedInstanceProps,
  UseExpandedRowProps,
  UseFiltersColumnProps,
  UseFiltersInstanceProps,
  UseGlobalFiltersInstanceProps,
  UseGroupByCellProps,
  UseGroupByColumnProps,
  UseGroupByInstanceProps,
  UseGroupByRowProps,
  UsePaginationInstanceProps,
  UseResizeColumnsColumnProps,
  UseRowSelectInstanceProps,
  UseRowSelectRowProps,
  UseRowStateCellProps,
  UseRowStateInstanceProps,
  UseRowStateRowProps,
  UseSortByColumnProps,
  UseSortByInstanceProps,
} from "react-table";

declare module "react-table" {
  export interface TableInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseColumnOrderInstanceProps<D>,
      UseExpandedInstanceProps<D>,
      UseFiltersInstanceProps<D>,
      UseGlobalFiltersInstanceProps<D>,
      UseGroupByInstanceProps<D>,
      UsePaginationInstanceProps<D>,
      UseRowSelectInstanceProps<D>,
      UseRowStateInstanceProps<D>,
      UseSortByInstanceProps<D> {}

  export interface ColumnInstance<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseFiltersColumnProps<D>,
      UseGroupByColumnProps<D>,
      UseResizeColumnsColumnProps<D>,
      UseSortByColumnProps<D> {}

  export interface Cell<
    D extends Record<string, unknown> = Record<string, unknown>,
    V = any
  > extends UseGroupByCellProps<D>,
      UseRowStateCellProps<D> {}

  export interface Row<
    D extends Record<string, unknown> = Record<string, unknown>
  > extends UseExpandedRowProps<D>,
      UseGroupByRowProps<D>,
      UseRowSelectRowProps<D>,
      UseRowStateRowProps<D> {}
}
