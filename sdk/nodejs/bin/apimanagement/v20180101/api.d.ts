import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
/**
 * API details.
 */
export declare class Api extends pulumi.CustomResource {
    /**
     * Get an existing Api resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Api;
    /**
     * Returns true if the given object is an instance of Api.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Api;
    /**
     * Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    readonly apiRevision: pulumi.Output<string | undefined>;
    /**
     * Description of the Api Revision.
     */
    readonly apiRevisionDescription: pulumi.Output<string | undefined>;
    /**
     * Type of API.
     */
    readonly apiType: pulumi.Output<string | undefined>;
    /**
     * Indicates the Version identifier of the API if the API is versioned
     */
    readonly apiVersion: pulumi.Output<string | undefined>;
    /**
     * Description of the Api Version.
     */
    readonly apiVersionDescription: pulumi.Output<string | undefined>;
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating
     */
    readonly apiVersionSet: pulumi.Output<outputs.apimanagement.v20180101.ApiVersionSetContractDetailsResponse | undefined>;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    readonly apiVersionSetId: pulumi.Output<string | undefined>;
    /**
     * Collection of authentication settings included into this API.
     */
    readonly authenticationSettings: pulumi.Output<outputs.apimanagement.v20180101.AuthenticationSettingsContractResponse | undefined>;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * API name.
     */
    readonly displayName: pulumi.Output<string | undefined>;
    /**
     * Indicates if API revision is current api revision.
     */
    readonly isCurrent: pulumi.Output<boolean>;
    /**
     * Indicates if API revision is accessible via the gateway.
     */
    readonly isOnline: pulumi.Output<boolean>;
    /**
     * Resource name.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    readonly path: pulumi.Output<string>;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    readonly protocols: pulumi.Output<string[] | undefined>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl: pulumi.Output<string | undefined>;
    /**
     * Protocols over which API is made available.
     */
    readonly subscriptionKeyParameterNames: pulumi.Output<outputs.apimanagement.v20180101.SubscriptionKeyParameterNamesContractResponse | undefined>;
    /**
     * Resource type for API Management resource.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a Api resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiArgs, opts?: pulumi.CustomResourceOptions);
    constructor(name: string, state: undefined, opts: pulumi.CustomResourceOptions);
}
/**
 * The set of arguments for constructing a Api resource.
 */
export interface ApiArgs {
    /**
     * API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number.
     */
    readonly apiId: pulumi.Input<string>;
    /**
     * Describes the Revision of the Api. If no value is provided, default revision 1 is created
     */
    readonly apiRevision?: pulumi.Input<string>;
    /**
     * Description of the Api Revision.
     */
    readonly apiRevisionDescription?: pulumi.Input<string>;
    /**
     * Type of API.
     */
    readonly apiType?: pulumi.Input<string>;
    /**
     * Indicates the Version identifier of the API if the API is versioned
     */
    readonly apiVersion?: pulumi.Input<string>;
    /**
     * Description of the Api Version.
     */
    readonly apiVersionDescription?: pulumi.Input<string>;
    /**
     * An API Version Set contains the common configuration for a set of API Versions relating
     */
    readonly apiVersionSet?: pulumi.Input<inputs.apimanagement.v20180101.ApiVersionSetContractDetails>;
    /**
     * A resource identifier for the related ApiVersionSet.
     */
    readonly apiVersionSetId?: pulumi.Input<string>;
    /**
     * Collection of authentication settings included into this API.
     */
    readonly authenticationSettings?: pulumi.Input<inputs.apimanagement.v20180101.AuthenticationSettingsContract>;
    /**
     * Format of the Content in which the API is getting imported.
     */
    readonly contentFormat?: pulumi.Input<string>;
    /**
     * Content value when Importing an API.
     */
    readonly contentValue?: pulumi.Input<string>;
    /**
     * Description of the API. May include HTML formatting tags.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * API name.
     */
    readonly displayName?: pulumi.Input<string>;
    /**
     * Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance. It is appended to the API endpoint base URL specified during the service instance creation to form a public URL for this API.
     */
    readonly path: pulumi.Input<string>;
    /**
     * Describes on which protocols the operations in this API can be invoked.
     */
    readonly protocols?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the resource group.
     */
    readonly resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    readonly serviceName: pulumi.Input<string>;
    /**
     * Absolute URL of the backend service implementing this API.
     */
    readonly serviceUrl?: pulumi.Input<string>;
    /**
     * Type of Api to create.
     *  * `http` creates a SOAP to REST API
     *  * `soap` creates a SOAP pass-through API .
     */
    readonly soapApiType?: pulumi.Input<string>;
    /**
     * Protocols over which API is made available.
     */
    readonly subscriptionKeyParameterNames?: pulumi.Input<inputs.apimanagement.v20180101.SubscriptionKeyParameterNamesContract>;
    /**
     * Criteria to limit import of WSDL to a subset of the document.
     */
    readonly wsdlSelector?: pulumi.Input<inputs.apimanagement.v20180101.ApiCreateOrUpdatePropertiesWsdlSelector>;
}
