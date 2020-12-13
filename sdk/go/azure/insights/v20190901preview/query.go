// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20190901preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A Log Analytics QueryPack-Query definition.
type Query struct {
	pulumi.CustomResourceState

	// Object Id of user creating the query.
	Author pulumi.StringOutput `pulumi:"author"`
	// Body of the query.
	Body pulumi.StringOutput `pulumi:"body"`
	// Description of the query.
	Description pulumi.StringPtrOutput `pulumi:"description"`
	// Unique display name for your query within the Query Pack.
	DisplayName pulumi.StringOutput `pulumi:"displayName"`
	// Azure resource name
	Name pulumi.StringOutput `pulumi:"name"`
	// Additional properties that can be set for the query.
	Properties pulumi.AnyOutput `pulumi:"properties"`
	// The related metadata items for the function.
	Related LogAnalyticsQueryPackQueryPropertiesResponseRelatedPtrOutput `pulumi:"related"`
	// Read only system data
	SystemData SystemDataResponseOutput `pulumi:"systemData"`
	// Tags associated with the query.
	Tags pulumi.StringArrayMapOutput `pulumi:"tags"`
	// Creation Date for the Log Analytics Query, in ISO 8601 format.
	TimeCreated pulumi.StringOutput `pulumi:"timeCreated"`
	// Last modified date of the Log Analytics Query, in ISO 8601 format.
	TimeModified pulumi.StringOutput `pulumi:"timeModified"`
	// Azure resource type
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewQuery registers a new resource with the given unique name, arguments, and options.
func NewQuery(ctx *pulumi.Context,
	name string, args *QueryArgs, opts ...pulumi.ResourceOption) (*Query, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Body == nil {
		return nil, errors.New("invalid value for required argument 'Body'")
	}
	if args.DisplayName == nil {
		return nil, errors.New("invalid value for required argument 'DisplayName'")
	}
	if args.Id == nil {
		return nil, errors.New("invalid value for required argument 'Id'")
	}
	if args.QueryPackName == nil {
		return nil, errors.New("invalid value for required argument 'QueryPackName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	var resource Query
	err := ctx.RegisterResource("azure-nextgen:insights/v20190901preview:Query", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetQuery gets an existing Query resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetQuery(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *QueryState, opts ...pulumi.ResourceOption) (*Query, error) {
	var resource Query
	err := ctx.ReadResource("azure-nextgen:insights/v20190901preview:Query", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Query resources.
type queryState struct {
	// Object Id of user creating the query.
	Author *string `pulumi:"author"`
	// Body of the query.
	Body *string `pulumi:"body"`
	// Description of the query.
	Description *string `pulumi:"description"`
	// Unique display name for your query within the Query Pack.
	DisplayName *string `pulumi:"displayName"`
	// Azure resource name
	Name *string `pulumi:"name"`
	// Additional properties that can be set for the query.
	Properties interface{} `pulumi:"properties"`
	// The related metadata items for the function.
	Related *LogAnalyticsQueryPackQueryPropertiesResponseRelated `pulumi:"related"`
	// Read only system data
	SystemData *SystemDataResponse `pulumi:"systemData"`
	// Tags associated with the query.
	Tags map[string][]string `pulumi:"tags"`
	// Creation Date for the Log Analytics Query, in ISO 8601 format.
	TimeCreated *string `pulumi:"timeCreated"`
	// Last modified date of the Log Analytics Query, in ISO 8601 format.
	TimeModified *string `pulumi:"timeModified"`
	// Azure resource type
	Type *string `pulumi:"type"`
}

type QueryState struct {
	// Object Id of user creating the query.
	Author pulumi.StringPtrInput
	// Body of the query.
	Body pulumi.StringPtrInput
	// Description of the query.
	Description pulumi.StringPtrInput
	// Unique display name for your query within the Query Pack.
	DisplayName pulumi.StringPtrInput
	// Azure resource name
	Name pulumi.StringPtrInput
	// Additional properties that can be set for the query.
	Properties pulumi.Input
	// The related metadata items for the function.
	Related LogAnalyticsQueryPackQueryPropertiesResponseRelatedPtrInput
	// Read only system data
	SystemData SystemDataResponsePtrInput
	// Tags associated with the query.
	Tags pulumi.StringArrayMapInput
	// Creation Date for the Log Analytics Query, in ISO 8601 format.
	TimeCreated pulumi.StringPtrInput
	// Last modified date of the Log Analytics Query, in ISO 8601 format.
	TimeModified pulumi.StringPtrInput
	// Azure resource type
	Type pulumi.StringPtrInput
}

func (QueryState) ElementType() reflect.Type {
	return reflect.TypeOf((*queryState)(nil)).Elem()
}

type queryArgs struct {
	// Body of the query.
	Body string `pulumi:"body"`
	// Description of the query.
	Description *string `pulumi:"description"`
	// Unique display name for your query within the Query Pack.
	DisplayName string `pulumi:"displayName"`
	// The id of a specific query defined in the Log Analytics QueryPack
	Id string `pulumi:"id"`
	// Additional properties that can be set for the query.
	Properties interface{} `pulumi:"properties"`
	// The name of the Log Analytics QueryPack resource.
	QueryPackName string `pulumi:"queryPackName"`
	// The related metadata items for the function.
	Related *LogAnalyticsQueryPackQueryPropertiesRelated `pulumi:"related"`
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// Tags associated with the query.
	Tags map[string][]string `pulumi:"tags"`
}

// The set of arguments for constructing a Query resource.
type QueryArgs struct {
	// Body of the query.
	Body pulumi.StringInput
	// Description of the query.
	Description pulumi.StringPtrInput
	// Unique display name for your query within the Query Pack.
	DisplayName pulumi.StringInput
	// The id of a specific query defined in the Log Analytics QueryPack
	Id pulumi.StringInput
	// Additional properties that can be set for the query.
	Properties pulumi.Input
	// The name of the Log Analytics QueryPack resource.
	QueryPackName pulumi.StringInput
	// The related metadata items for the function.
	Related LogAnalyticsQueryPackQueryPropertiesRelatedPtrInput
	// The name of the resource group. The name is case insensitive.
	ResourceGroupName pulumi.StringInput
	// Tags associated with the query.
	Tags pulumi.StringArrayMapInput
}

func (QueryArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*queryArgs)(nil)).Elem()
}

type QueryInput interface {
	pulumi.Input

	ToQueryOutput() QueryOutput
	ToQueryOutputWithContext(ctx context.Context) QueryOutput
}

func (Query) ElementType() reflect.Type {
	return reflect.TypeOf((*Query)(nil)).Elem()
}

func (i Query) ToQueryOutput() QueryOutput {
	return i.ToQueryOutputWithContext(context.Background())
}

func (i Query) ToQueryOutputWithContext(ctx context.Context) QueryOutput {
	return pulumi.ToOutputWithContext(ctx, i).(QueryOutput)
}

type QueryOutput struct {
	*pulumi.OutputState
}

func (QueryOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*QueryOutput)(nil)).Elem()
}

func (o QueryOutput) ToQueryOutput() QueryOutput {
	return o
}

func (o QueryOutput) ToQueryOutputWithContext(ctx context.Context) QueryOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(QueryOutput{})
}
