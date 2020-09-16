import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * Represents an incident in Azure Security Insights.
 */
export declare class Incident extends pulumi.CustomResource {
    /**
     * Get an existing Incident resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Incident;
    /**
     * Returns true if the given object is an instance of Incident.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Incident;
    /**
     * Additional data on the incident
     */
    readonly additionalData: pulumi.Output<outputs.operationalinsights.v20200101.IncidentAdditionalDataResponse>;
    /**
     * The reason the incident was closed
     */
    readonly classification: pulumi.Output<string | undefined>;
    /**
     * Describes the reason the incident was closed
     */
    readonly classificationComment: pulumi.Output<string | undefined>;
    /**
     * The classification reason the incident was closed with
     */
    readonly classificationReason: pulumi.Output<string | undefined>;
    /**
     * The time the incident was created
     */
    readonly createdTimeUtc: pulumi.Output<string>;
    /**
     * The description of the incident
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Etag of the azure resource
     */
    readonly etag: pulumi.Output<string | undefined>;
    /**
     * The time of the first activity in the incident
     */
    readonly firstActivityTimeUtc: pulumi.Output<string | undefined>;
    /**
     * A sequential number
     */
    readonly incidentNumber: pulumi.Output<number>;
    /**
     * The deep-link url to the incident in Azure portal
     */
    readonly incidentUrl: pulumi.Output<string>;
    /**
     * List of labels relevant to this incident
     */
    readonly labels: pulumi.Output<outputs.operationalinsights.v20200101.IncidentLabelResponse[] | undefined>;
    /**
     * The time of the last activity in the incident
     */
    readonly lastActivityTimeUtc: pulumi.Output<string | undefined>;
    /**
     * The last time the incident was updated
     */
    readonly lastModifiedTimeUtc: pulumi.Output<string>;
    /**
     * Azure resource name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Describes a user that the incident is assigned to
     */
    readonly owner: pulumi.Output<outputs.operationalinsights.v20200101.IncidentOwnerInfoResponse | undefined>;
    /**
     * List of resource ids of Analytic rules related to the incident
     */
    readonly relatedAnalyticRuleIds: pulumi.Output<string[]>;
    /**
     * The severity of the incident
     */
    readonly severity: pulumi.Output<string>;
    /**
     * The status of the incident
     */
    readonly status: pulumi.Output<string>;
    /**
     * The title of the incident
     */
    readonly title: pulumi.Output<string>;
    /**
     * Azure resource type
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Incident resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IncidentArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Incident resource.
 */
export interface IncidentArgs {
    /**
     * The reason the incident was closed
     */
    readonly classification?: pulumi.Input<string>;
    /**
     * Describes the reason the incident was closed
     */
    readonly classificationComment?: pulumi.Input<string>;
    /**
     * The classification reason the incident was closed with
     */
    readonly classificationReason?: pulumi.Input<string>;
    /**
     * The description of the incident
     */
    readonly description?: pulumi.Input<string>;
    /**
     * Etag of the azure resource
     */
    readonly etag?: pulumi.Input<string>;
    /**
     * The time of the first activity in the incident
     */
    readonly firstActivityTimeUtc?: pulumi.Input<string>;
    /**
     * Incident ID
     */
    readonly incidentId: pulumi.Input<string>;
    /**
     * List of labels relevant to this incident
     */
    readonly labels?: pulumi.Input<pulumi.Input<inputs.operationalinsights.v20200101.IncidentLabel>[]>;
    /**
     * The time of the last activity in the incident
     */
    readonly lastActivityTimeUtc?: pulumi.Input<string>;
    /**
     * Describes a user that the incident is assigned to
     */
    readonly owner?: pulumi.Input<inputs.operationalinsights.v20200101.IncidentOwnerInfo>;
    /**
     * The name of the resource group within the user's subscription. The name is case insensitive.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The severity of the incident
     */
    readonly severity: pulumi.Input<string>;
    /**
     * The status of the incident
     */
    readonly status: pulumi.Input<string>;
    /**
     * The title of the incident
     */
    readonly title: pulumi.Input<string>;
    /**
     * The name of the workspace.
     */
    readonly workspaceName: pulumi.Input<string>;
}
