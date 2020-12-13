// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190501

import (
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

func LookupIntegrationAccountSchema(ctx *pulumi.Context, args *LookupIntegrationAccountSchemaArgs, opts ...pulumi.InvokeOption) (*LookupIntegrationAccountSchemaResult, error) {
	var rv LookupIntegrationAccountSchemaResult
	err := ctx.Invoke("azure-nextgen:logic/v20190501:getIntegrationAccountSchema", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

type LookupIntegrationAccountSchemaArgs struct {
	// The integration account name.
	IntegrationAccountName string `pulumi:"integrationAccountName"`
	// The resource group name.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The integration account schema name.
	SchemaName string `pulumi:"schemaName"`
}

// The integration account schema.
type LookupIntegrationAccountSchemaResult struct {
	// The changed time.
	ChangedTime string `pulumi:"changedTime"`
	// The content.
	Content *string `pulumi:"content"`
	// The content link.
	ContentLink ContentLinkResponse `pulumi:"contentLink"`
	// The content type.
	ContentType *string `pulumi:"contentType"`
	// The created time.
	CreatedTime string `pulumi:"createdTime"`
	// The document name.
	DocumentName *string `pulumi:"documentName"`
	// The file name.
	FileName *string `pulumi:"fileName"`
	// The resource id.
	Id string `pulumi:"id"`
	// The resource location.
	Location *string `pulumi:"location"`
	// The metadata.
	Metadata interface{} `pulumi:"metadata"`
	// Gets the resource name.
	Name string `pulumi:"name"`
	// The schema type.
	SchemaType string `pulumi:"schemaType"`
	// The resource tags.
	Tags map[string]string `pulumi:"tags"`
	// The target namespace of the schema.
	TargetNamespace *string `pulumi:"targetNamespace"`
	// Gets the resource type.
	Type string `pulumi:"type"`
}
