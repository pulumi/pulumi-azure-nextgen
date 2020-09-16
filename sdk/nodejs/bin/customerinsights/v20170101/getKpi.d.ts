import * as pulumi from "@pulumi/pulumi";
import * as outputs from "../../types/output";
export declare function getKpi(args: GetKpiArgs, opts?: pulumi.InvokeOptions): Promise<GetKpiResult>;
export interface GetKpiArgs {
    /**
     * The name of the hub.
     */
    readonly hubName: string;
    /**
     * The name of the KPI.
     */
    readonly kpiName: string;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: string;
}
/**
 * The KPI resource format.
 */
export interface GetKpiResult {
    /**
     * The aliases.
     */
    readonly aliases?: outputs.customerinsights.v20170101.KpiAliasResponse[];
    /**
     * The calculation window.
     */
    readonly calculationWindow: string;
    /**
     * Name of calculation window field.
     */
    readonly calculationWindowFieldName?: string;
    /**
     * Localized description for the KPI.
     */
    readonly description?: {
        [key: string]: string;
    };
    /**
     * Localized display name for the KPI.
     */
    readonly displayName?: {
        [key: string]: string;
    };
    /**
     * The mapping entity type.
     */
    readonly entityType: string;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: string;
    /**
     * The computation expression for the KPI.
     */
    readonly expression: string;
    /**
     * The KPI extracts.
     */
    readonly extracts?: outputs.customerinsights.v20170101.KpiExtractResponse[];
    /**
     * The filter expression for the KPI.
     */
    readonly filter?: string;
    /**
     * The computation function for the KPI.
     */
    readonly function: string;
    /**
     * the group by properties for the KPI.
     */
    readonly groupBy?: string[];
    /**
     * The KPI GroupByMetadata.
     */
    readonly groupByMetadata: outputs.customerinsights.v20170101.KpiGroupByMetadataResponse[];
    /**
     * The KPI name.
     */
    readonly kpiName: string;
    /**
     * Resource name.
     */
    readonly name: string;
    /**
     * The participant profiles.
     */
    readonly participantProfilesMetadata: outputs.customerinsights.v20170101.KpiParticipantProfilesMetadataResponse[];
    /**
     * Provisioning state.
     */
    readonly provisioningState: string;
    /**
     * The hub name.
     */
    readonly tenantId: string;
    /**
     * The KPI thresholds.
     */
    readonly thresHolds?: outputs.customerinsights.v20170101.KpiThresholdsResponse;
    /**
     * Resource type.
     */
    readonly type: string;
    /**
     * The unit of measurement for the KPI.
     */
    readonly unit?: string;
}
