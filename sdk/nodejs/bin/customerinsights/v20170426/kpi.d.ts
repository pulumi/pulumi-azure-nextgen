import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * The KPI resource format.
 */
export declare class Kpi extends pulumi.CustomResource {
    /**
     * Get an existing Kpi resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Kpi;
    /**
     * Returns true if the given object is an instance of Kpi.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Kpi;
    /**
     * The aliases.
     */
    readonly aliases: pulumi.Output<outputs.customerinsights.v20170426.KpiAliasResponse[] | undefined>;
    /**
     * The calculation window.
     */
    readonly calculationWindow: pulumi.Output<string>;
    /**
     * Name of calculation window field.
     */
    readonly calculationWindowFieldName: pulumi.Output<string | undefined>;
    /**
     * Localized description for the KPI.
     */
    readonly description: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Localized display name for the KPI.
     */
    readonly displayName: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * The mapping entity type.
     */
    readonly entityType: pulumi.Output<string>;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: pulumi.Output<string>;
    /**
     * The computation expression for the KPI.
     */
    readonly expression: pulumi.Output<string>;
    /**
     * The KPI extracts.
     */
    readonly extracts: pulumi.Output<outputs.customerinsights.v20170426.KpiExtractResponse[] | undefined>;
    /**
     * The filter expression for the KPI.
     */
    readonly filter: pulumi.Output<string | undefined>;
    /**
     * The computation function for the KPI.
     */
    readonly function: pulumi.Output<string>;
    /**
     * the group by properties for the KPI.
     */
    readonly groupBy: pulumi.Output<string[] | undefined>;
    /**
     * The KPI GroupByMetadata.
     */
    readonly groupByMetadata: pulumi.Output<outputs.customerinsights.v20170426.KpiGroupByMetadataResponse[]>;
    /**
     * The KPI name.
     */
    readonly kpiName: pulumi.Output<string>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The participant profiles.
     */
    readonly participantProfilesMetadata: pulumi.Output<outputs.customerinsights.v20170426.KpiParticipantProfilesMetadataResponse[]>;
    /**
     * Provisioning state.
     */
    readonly provisioningState: pulumi.Output<string>;
    /**
     * The hub name.
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * The KPI thresholds.
     */
    readonly thresHolds: pulumi.Output<outputs.customerinsights.v20170426.KpiThresholdsResponse | undefined>;
    /**
     * Resource type.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The unit of measurement for the KPI.
     */
    readonly unit: pulumi.Output<string | undefined>;
    /**
     * Create a Kpi resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: KpiArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Kpi resource.
 */
export interface KpiArgs {
    /**
     * The aliases.
     */
    readonly aliases?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170426.KpiAlias>[]>;
    /**
     * The calculation window.
     */
    readonly calculationWindow: pulumi.Input<string>;
    /**
     * Name of calculation window field.
     */
    readonly calculationWindowFieldName?: pulumi.Input<string>;
    /**
     * Localized description for the KPI.
     */
    readonly description?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Localized display name for the KPI.
     */
    readonly displayName?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The mapping entity type.
     */
    readonly entityType: pulumi.Input<string>;
    /**
     * The mapping entity name.
     */
    readonly entityTypeName: pulumi.Input<string>;
    /**
     * The computation expression for the KPI.
     */
    readonly expression: pulumi.Input<string>;
    /**
     * The KPI extracts.
     */
    readonly extracts?: pulumi.Input<pulumi.Input<inputs.customerinsights.v20170426.KpiExtract>[]>;
    /**
     * The filter expression for the KPI.
     */
    readonly filter?: pulumi.Input<string>;
    /**
     * The computation function for the KPI.
     */
    readonly function: pulumi.Input<string>;
    /**
     * the group by properties for the KPI.
     */
    readonly groupBy?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the hub.
     */
    readonly hubName: pulumi.Input<string>;
    /**
     * The name of the KPI.
     */
    readonly kpiName: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The KPI thresholds.
     */
    readonly thresHolds?: pulumi.Input<inputs.customerinsights.v20170426.KpiThresholds>;
    /**
     * The unit of measurement for the KPI.
     */
    readonly unit?: pulumi.Input<string>;
}
