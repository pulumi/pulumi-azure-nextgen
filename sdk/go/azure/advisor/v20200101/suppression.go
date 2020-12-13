// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20200101

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule.
type Suppression struct {
	pulumi.CustomResourceState

	// Gets or sets the expiration time stamp.
	ExpirationTimeStamp pulumi.StringOutput `pulumi:"expirationTimeStamp"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// The GUID of the suppression.
	SuppressionId pulumi.StringPtrOutput `pulumi:"suppressionId"`
	// The duration for which the suppression is valid.
	Ttl pulumi.StringPtrOutput `pulumi:"ttl"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewSuppression registers a new resource with the given unique name, arguments, and options.
func NewSuppression(ctx *pulumi.Context,
	name string, args *SuppressionArgs, opts ...pulumi.ResourceOption) (*Suppression, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Name == nil {
		return nil, errors.New("invalid value for required argument 'Name'")
	}
	if args.RecommendationId == nil {
		return nil, errors.New("invalid value for required argument 'RecommendationId'")
	}
	if args.ResourceUri == nil {
		return nil, errors.New("invalid value for required argument 'ResourceUri'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:advisor/latest:Suppression"),
		},
		{
			Type: pulumi.String("azure-nextgen:advisor/v20160712preview:Suppression"),
		},
		{
			Type: pulumi.String("azure-nextgen:advisor/v20170331:Suppression"),
		},
		{
			Type: pulumi.String("azure-nextgen:advisor/v20170419:Suppression"),
		},
	})
	opts = append(opts, aliases)
	var resource Suppression
	err := ctx.RegisterResource("azure-nextgen:advisor/v20200101:Suppression", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetSuppression gets an existing Suppression resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSuppression(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *SuppressionState, opts ...pulumi.ResourceOption) (*Suppression, error) {
	var resource Suppression
	err := ctx.ReadResource("azure-nextgen:advisor/v20200101:Suppression", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering Suppression resources.
type suppressionState struct {
	// Gets or sets the expiration time stamp.
	ExpirationTimeStamp *string `pulumi:"expirationTimeStamp"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// The GUID of the suppression.
	SuppressionId *string `pulumi:"suppressionId"`
	// The duration for which the suppression is valid.
	Ttl *string `pulumi:"ttl"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type SuppressionState struct {
	// Gets or sets the expiration time stamp.
	ExpirationTimeStamp pulumi.StringPtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// The GUID of the suppression.
	SuppressionId pulumi.StringPtrInput
	// The duration for which the suppression is valid.
	Ttl pulumi.StringPtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (SuppressionState) ElementType() reflect.Type {
	return reflect.TypeOf((*suppressionState)(nil)).Elem()
}

type suppressionArgs struct {
	// The name of the suppression.
	Name string `pulumi:"name"`
	// The recommendation ID.
	RecommendationId string `pulumi:"recommendationId"`
	// The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
	ResourceUri string `pulumi:"resourceUri"`
	// The GUID of the suppression.
	SuppressionId *string `pulumi:"suppressionId"`
	// The duration for which the suppression is valid.
	Ttl *string `pulumi:"ttl"`
}

// The set of arguments for constructing a Suppression resource.
type SuppressionArgs struct {
	// The name of the suppression.
	Name pulumi.StringInput
	// The recommendation ID.
	RecommendationId pulumi.StringInput
	// The fully qualified Azure Resource Manager identifier of the resource to which the recommendation applies.
	ResourceUri pulumi.StringInput
	// The GUID of the suppression.
	SuppressionId pulumi.StringPtrInput
	// The duration for which the suppression is valid.
	Ttl pulumi.StringPtrInput
}

func (SuppressionArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*suppressionArgs)(nil)).Elem()
}

type SuppressionInput interface {
	pulumi.Input

	ToSuppressionOutput() SuppressionOutput
	ToSuppressionOutputWithContext(ctx context.Context) SuppressionOutput
}

func (Suppression) ElementType() reflect.Type {
	return reflect.TypeOf((*Suppression)(nil)).Elem()
}

func (i Suppression) ToSuppressionOutput() SuppressionOutput {
	return i.ToSuppressionOutputWithContext(context.Background())
}

func (i Suppression) ToSuppressionOutputWithContext(ctx context.Context) SuppressionOutput {
	return pulumi.ToOutputWithContext(ctx, i).(SuppressionOutput)
}

type SuppressionOutput struct {
	*pulumi.OutputState
}

func (SuppressionOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*SuppressionOutput)(nil)).Elem()
}

func (o SuppressionOutput) ToSuppressionOutput() SuppressionOutput {
	return o
}

func (o SuppressionOutput) ToSuppressionOutputWithContext(ctx context.Context) SuppressionOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(SuppressionOutput{})
}
