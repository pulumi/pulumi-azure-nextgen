// *** WARNING: this file was generated by the Pulumi SDK Generator. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package v20180330preview

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v2/go/pulumi"
)

// A Streaming Policy resource
type StreamingPolicy struct {
	pulumi.CustomResourceState

	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs CommonEncryptionCbcsResponsePtrOutput `pulumi:"commonEncryptionCbcs"`
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc CommonEncryptionCencResponsePtrOutput `pulumi:"commonEncryptionCenc"`
	// Creation time of Streaming Policy
	Created pulumi.StringOutput `pulumi:"created"`
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName pulumi.StringPtrOutput `pulumi:"defaultContentKeyPolicyName"`
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption EnvelopeEncryptionResponsePtrOutput `pulumi:"envelopeEncryption"`
	// The name of the resource.
	Name pulumi.StringOutput `pulumi:"name"`
	// Configuration of NoEncryption
	NoEncryption NoEncryptionResponsePtrOutput `pulumi:"noEncryption"`
	// The type of the resource.
	Type pulumi.StringOutput `pulumi:"type"`
}

// NewStreamingPolicy registers a new resource with the given unique name, arguments, and options.
func NewStreamingPolicy(ctx *pulumi.Context,
	name string, args *StreamingPolicyArgs, opts ...pulumi.ResourceOption) (*StreamingPolicy, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.AccountName == nil {
		return nil, errors.New("invalid value for required argument 'AccountName'")
	}
	if args.ResourceGroupName == nil {
		return nil, errors.New("invalid value for required argument 'ResourceGroupName'")
	}
	if args.StreamingPolicyName == nil {
		return nil, errors.New("invalid value for required argument 'StreamingPolicyName'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("azure-nextgen:media/latest:StreamingPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:media/v20180601preview:StreamingPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:media/v20180701:StreamingPolicy"),
		},
		{
			Type: pulumi.String("azure-nextgen:media/v20200501:StreamingPolicy"),
		},
	})
	opts = append(opts, aliases)
	var resource StreamingPolicy
	err := ctx.RegisterResource("azure-nextgen:media/v20180330preview:StreamingPolicy", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStreamingPolicy gets an existing StreamingPolicy resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStreamingPolicy(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StreamingPolicyState, opts ...pulumi.ResourceOption) (*StreamingPolicy, error) {
	var resource StreamingPolicy
	err := ctx.ReadResource("azure-nextgen:media/v20180330preview:StreamingPolicy", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StreamingPolicy resources.
type streamingPolicyState struct {
	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs *CommonEncryptionCbcsResponse `pulumi:"commonEncryptionCbcs"`
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc *CommonEncryptionCencResponse `pulumi:"commonEncryptionCenc"`
	// Creation time of Streaming Policy
	Created *string `pulumi:"created"`
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName *string `pulumi:"defaultContentKeyPolicyName"`
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption *EnvelopeEncryptionResponse `pulumi:"envelopeEncryption"`
	// The name of the resource.
	Name *string `pulumi:"name"`
	// Configuration of NoEncryption
	NoEncryption *NoEncryptionResponse `pulumi:"noEncryption"`
	// The type of the resource.
	Type *string `pulumi:"type"`
}

type StreamingPolicyState struct {
	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs CommonEncryptionCbcsResponsePtrInput
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc CommonEncryptionCencResponsePtrInput
	// Creation time of Streaming Policy
	Created pulumi.StringPtrInput
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName pulumi.StringPtrInput
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption EnvelopeEncryptionResponsePtrInput
	// The name of the resource.
	Name pulumi.StringPtrInput
	// Configuration of NoEncryption
	NoEncryption NoEncryptionResponsePtrInput
	// The type of the resource.
	Type pulumi.StringPtrInput
}

func (StreamingPolicyState) ElementType() reflect.Type {
	return reflect.TypeOf((*streamingPolicyState)(nil)).Elem()
}

type streamingPolicyArgs struct {
	// The Media Services account name.
	AccountName string `pulumi:"accountName"`
	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs *CommonEncryptionCbcs `pulumi:"commonEncryptionCbcs"`
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc *CommonEncryptionCenc `pulumi:"commonEncryptionCenc"`
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName *string `pulumi:"defaultContentKeyPolicyName"`
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption *EnvelopeEncryption `pulumi:"envelopeEncryption"`
	// Configuration of NoEncryption
	NoEncryption *NoEncryption `pulumi:"noEncryption"`
	// The name of the resource group within the Azure subscription.
	ResourceGroupName string `pulumi:"resourceGroupName"`
	// The Streaming Policy name.
	StreamingPolicyName string `pulumi:"streamingPolicyName"`
}

// The set of arguments for constructing a StreamingPolicy resource.
type StreamingPolicyArgs struct {
	// The Media Services account name.
	AccountName pulumi.StringInput
	// Configuration of CommonEncryptionCbcs
	CommonEncryptionCbcs CommonEncryptionCbcsPtrInput
	// Configuration of CommonEncryptionCenc
	CommonEncryptionCenc CommonEncryptionCencPtrInput
	// Default ContentKey used by current Streaming Policy
	DefaultContentKeyPolicyName pulumi.StringPtrInput
	// Configuration of EnvelopeEncryption
	EnvelopeEncryption EnvelopeEncryptionPtrInput
	// Configuration of NoEncryption
	NoEncryption NoEncryptionPtrInput
	// The name of the resource group within the Azure subscription.
	ResourceGroupName pulumi.StringInput
	// The Streaming Policy name.
	StreamingPolicyName pulumi.StringInput
}

func (StreamingPolicyArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*streamingPolicyArgs)(nil)).Elem()
}

type StreamingPolicyInput interface {
	pulumi.Input

	ToStreamingPolicyOutput() StreamingPolicyOutput
	ToStreamingPolicyOutputWithContext(ctx context.Context) StreamingPolicyOutput
}

func (StreamingPolicy) ElementType() reflect.Type {
	return reflect.TypeOf((*StreamingPolicy)(nil)).Elem()
}

func (i StreamingPolicy) ToStreamingPolicyOutput() StreamingPolicyOutput {
	return i.ToStreamingPolicyOutputWithContext(context.Background())
}

func (i StreamingPolicy) ToStreamingPolicyOutputWithContext(ctx context.Context) StreamingPolicyOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StreamingPolicyOutput)
}

type StreamingPolicyOutput struct {
	*pulumi.OutputState
}

func (StreamingPolicyOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*StreamingPolicyOutput)(nil)).Elem()
}

func (o StreamingPolicyOutput) ToStreamingPolicyOutput() StreamingPolicyOutput {
	return o
}

func (o StreamingPolicyOutput) ToStreamingPolicyOutputWithContext(ctx context.Context) StreamingPolicyOutput {
	return o
}

func init() {
	pulumi.RegisterOutputType(StreamingPolicyOutput{})
}
